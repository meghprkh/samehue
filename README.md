# Same Hue
A simple game.

Play it at http://meghprkh.github.io/samehue/

Install on your mobile from https://build.phonegap.com/apps/1278446/install

# Generator algorithm

- The current algorithm randomly selects a square as a starting square.
- Then it randomly traces a path passing through squares using a cursor which starts at the starting square.
- The lenght of the path is predefined and known as optimum moves.
- The number of times the path crosses a square is stored in an array.
- The end position of cursor is also stored and is the starting position of cursor for player.
- Then a random number from 1 to 6 is added to each element of the square.
- This is the winning colour.
- Each element of array is moduloed 6 and displayed as A to F.
- The ending point of the generator is the starting point for player and the starting point is the end point.

# Current problems in the Generator algorithm

- It has to be supplied with an optimum moves because :
  - If too low a number is used then the path is small and most of the squares will not be stepped on by the generator cursor.
    Thus the winning colour is present in most of the squares and one can easily see the winning colour.
  - If too high a number is supplied the difference between the least moves and the optimum moves is too big for then the winning
    colour decided by the generator algo is not the real winning colour because the generator algorithm will have travelled over
    each square at least once. Thus the real winning colour is one greater than the generator winning colour.
    
  This optimum moves number is not currently understood as an formula.
- It doesnt have the humanness, for example it should automatically understand if the path it has generated is optimum and no shorter way to win the game exists.
