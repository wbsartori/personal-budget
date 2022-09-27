/*
  Warnings:

  - Added the required column `status` to the `person` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "movement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_person" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_person" ("birthDate", "email", "gender", "id", "name") SELECT "birthDate", "email", "gender", "id", "name" FROM "person";
DROP TABLE "person";
ALTER TABLE "new_person" RENAME TO "person";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
