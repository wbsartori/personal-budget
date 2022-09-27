-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_movement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_person" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL
);
INSERT INTO "new_movement" ("createdAt", "description", "id", "id_person", "status", "type", "value") SELECT "createdAt", "description", "id", "id_person", "status", "type", "value" FROM "movement";
DROP TABLE "movement";
ALTER TABLE "new_movement" RENAME TO "movement";
CREATE TABLE "new_person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_person" ("birthDate", "email", "gender", "id", "name", "status") SELECT "birthDate", "email", "gender", "id", "name", "status" FROM "person";
DROP TABLE "person";
ALTER TABLE "new_person" RENAME TO "person";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
