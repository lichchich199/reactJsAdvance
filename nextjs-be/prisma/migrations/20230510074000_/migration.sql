-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "numberPeople" INTEGER NOT NULL,
    "postalCode" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "created_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");
