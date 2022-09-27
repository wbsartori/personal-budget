-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
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
