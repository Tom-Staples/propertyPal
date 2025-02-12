/*
  Warnings:

  - You are about to drop the column `access_token` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `expires_at` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `id_token` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `session_state` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `token_type` on the `Account` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `VarChar(320)`.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Session] DROP CONSTRAINT [Session_userId_fkey];

-- DropIndex
ALTER TABLE [dbo].[User] DROP CONSTRAINT [User_email_key];

-- AlterTable
ALTER TABLE [dbo].[Account] DROP COLUMN [access_token],
[expires_at],
[id_token],
[refresh_token],
[session_state],
[token_type];
ALTER TABLE [dbo].[Account] ADD [accessToken] NVARCHAR(1000),
[expiresAt] INT,
[idToken] TEXT,
[refreshToken] NVARCHAR(1000),
[sessionState] NVARCHAR(1000),
[tokenType] NVARCHAR(1000);

-- AlterTable
ALTER TABLE [dbo].[User] ALTER COLUMN [email] VARCHAR(320) NULL;
ALTER TABLE [dbo].[User] ADD [role] VARCHAR(8);

-- DropTable
DROP TABLE [dbo].[Session];

-- CreateTable
CREATE TABLE [dbo].[SubscriptionPlans] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(8) NOT NULL,
    [paymentInterval] VARCHAR(9) NOT NULL,
    [price] MONEY NOT NULL,
    [totalUsers] INT NOT NULL,
    [adminUsers] INT NOT NULL,
    [standardUsers] INT NOT NULL,
    [totalProperties] INT NOT NULL,
    [householdTenants] INT NOT NULL,
    [marketingEnabled] BIT NOT NULL,
    [documentsEnabled] BIT NOT NULL,
    [hiveConnected] BIT NOT NULL,
    CONSTRAINT [SubscriptionPlans_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Subscriptions] (
    [id] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [planId] INT NOT NULL,
    [subscriptionStart] DATETIME2 NOT NULL,
    [subscriptionEnd] DATETIME2 NOT NULL,
    CONSTRAINT [Subscriptions_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateIndex
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email]);

-- AddForeignKey
ALTER TABLE [dbo].[Subscriptions] ADD CONSTRAINT [Subscriptions_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Subscriptions] ADD CONSTRAINT [Subscriptions_planId_fkey] FOREIGN KEY ([planId]) REFERENCES [dbo].[SubscriptionPlans]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
