-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'QUERO_LER',
    "currentpage" INTEGER NOT NULL DEFAULT 0,
    "createdat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" DATETIME,
    "genre" TEXT,
    "year" INTEGER,
    "pages" INTEGER,
    "rating" INTEGER DEFAULT 0,
    "synopsis" TEXT,
    "cover" TEXT,
    "isbn" TEXT
);
INSERT INTO "new_Book" ("author", "cover", "genre", "id", "pages", "rating", "synopsis", "title", "year") SELECT "author", "cover", "genre", "id", "pages", "rating", "synopsis", "title", "year" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
