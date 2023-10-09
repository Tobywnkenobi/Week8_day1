# // # How to solve a problem:

# // #     -Figure out wher the input and its type are
# // #     -Set up a function
# // #     -Figure out what the output and its type are
# // #     -Gather your Knowledge
# // #     -Gathers your constraints (Not Always Necessary)
# // #     -Determine a Logical way to solve the problem
# // #      -Write each step out in English
# // #       -Write each step out in Python-esse (sudo-code)
# // #       -Invoke and Test your function

# // # An infinite number of shelves are arranged one above the other in a staggered fashion.
# // # The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

# // #                  ┌────────┐
# // #                  │-6------│
# // #                  └────────┘
# // # ┌────────┐       
# // # │------5-│        
# // # └────────┘  ┌─────► OK!
# // #             │    ┌────────┐
# // #             │    │-4------│
# // #             │    └────────┘
# // # ┌────────┐  │
# // # │------3-│  │     
# // # BANG!────┘  ├─────► OK! 
# // #   ▲  |\_/|  │    ┌────────┐
# // #   │ ("^-^)  │    │-2------│
# // #   │ )   (   │    └────────┘
# // # ┌─┴─┴───┴┬──┘
# // # │------1-│
# // # └────────┘
# // # Inputs
# // # Start and finish shelf numbers (always positive integers, finish no smaller than start)

# // # Task
# // # Find the minimum number of jumps to go from start to finish

# // # Example
# // # Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
# // # link to cat photo if you dont want to download it : https://i.ibb.co/BymvZtL/Inspirers.jp

def min_jumps(start: int, finish: int) -> int:
    if start == finish:
        return 0
    
    jumps = [0] + [float('inf')] * finish
    jumps[start] = 0

    for i in range(start +1, finish + 1):
        if i - 1 >= start:
            jumps[i] = min(jumps[i], jumps[i-1] + 1)
        if i - 3 >= start:
            jumps[i] = min(jumps[i], jumps[i-3] + 1)

    return jumps[finish]

print(min_jumps(1, 5))