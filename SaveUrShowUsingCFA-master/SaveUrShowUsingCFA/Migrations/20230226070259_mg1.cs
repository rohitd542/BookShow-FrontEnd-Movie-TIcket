using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SaveUrShowUsingCFA.Migrations
{
    public partial class mg1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FindTicket",
                columns: table => new
                {
                    MovieId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Location = table.Column<string>(nullable: true),
                    Theatrename = table.Column<string>(nullable: true),
                    Moviename = table.Column<string>(nullable: false),
                    Slot = table.Column<string>(nullable: true),
                    charges = table.Column<int>(nullable: false),
                    date = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FindTicket", x => x.MovieId);
                });

            migrationBuilder.CreateTable(
                name: "Registration",
                columns: table => new
                {
                    userid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    username = table.Column<string>(maxLength: 30, nullable: false),
                    email = table.Column<string>(maxLength: 30, nullable: false),
                    password = table.Column<string>(maxLength: 30, nullable: false),
                    confirmpassword = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registration", x => x.userid);
                });

            migrationBuilder.CreateTable(
                name: "BookTicket",
                columns: table => new
                {
                    Bookid = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Seatnum = table.Column<int>(nullable: true),
                    MovieId = table.Column<int>(nullable: true),
                    UserId = table.Column<int>(nullable: true),
                    Date = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookTicket", x => x.Bookid);
                    table.ForeignKey(
                        name: "FK_BookTicket_FindTicket_MovieId",
                        column: x => x.MovieId,
                        principalTable: "FindTicket",
                        principalColumn: "MovieId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_BookTicket_Registration_UserId",
                        column: x => x.UserId,
                        principalTable: "Registration",
                        principalColumn: "userid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BookTicket_MovieId",
                table: "BookTicket",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_BookTicket_UserId",
                table: "BookTicket",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookTicket");

            migrationBuilder.DropTable(
                name: "FindTicket");

            migrationBuilder.DropTable(
                name: "Registration");
        }
    }
}
