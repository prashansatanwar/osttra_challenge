# Task 2

## Design
I created 2 templates for the document approval workflow -- *Pending and Agreement.* 

Agreement template takes in a block of code, owner of the contract, and the list of signatories. Agreement is only created after all the signatories have signed the contract.  

Pending template takes in an Agreement, and the list of already signed signatories. In the pending template there are 2 methods (referred as choices in daml). The first choice is *Sign*, which takes in the user which will sign the contract and appends it into the list of already signed signatories. The second choice is *Finalize*, which only works when all the signatories have signed the contract. Only the owner can finalize the contract thus creating the agreement.

## Testing
I created 4 users -- *Alice, Bob, Charlie, and David*. 

*Alice* is the owner of the Agreement. 

I have used both positive and negative test to verify the contract. For testing I've used both daml scripting and daml navigator UI. Before submitting the files, I have commented the daml script tests which can be uncommented to check.


## How to Run
Use *daml start* on this terminal in this directory to build the daml files and open navigator UI. 

## Note
The UI for this project is still under progress.

## References
I referred to the [daml documentation](https://docs.daml.com/index.html) for learning daml and creating this project.