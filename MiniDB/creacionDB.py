import sqlite3
try:
    with sqlite3.connect("my.db") as conn:
        # interact with database
        cur = conn.cursor()
        # cur.execute("Create TABLE movie(title, year, score)")
        # cur.execute("""
        #             INSERT INTO movie VALUES
        #             ('Monty Python and the Holy Grail', 1975, 8.2),
        #             ('And Now for Something Completely Different', 1971, 7.5)
        #             """)
        # conn.commit()
        res = cur.execute("SELECT * FROM movie")
        res.fetchall()

except sqlite3.OperationalError as e:
    print("Failed to open database: ", e)

