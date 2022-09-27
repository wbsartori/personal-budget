/*
  Warnings:

  - You are about to alter the column `birthDate` on the `person` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_person" ("birthDate", "createdAt", "email", "gender", "id", "name", "status", "updatedAt") SELECT "birthDate", "createdAt", "email", "gender", "id", "name", "status", "updatedAt" FROM "person";
DROP TABLE "person";
ALTER TABLE "new_person" RENAME TO "person";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
