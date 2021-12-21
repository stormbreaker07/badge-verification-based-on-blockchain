Introduction:
The main work to do is to make verification process secure and
safe so that why blockchain comes in play as the data that stored
on blochchain doesnot change.
So we use blockchain to store badge data and get data when
needed using transaction hash.

Motivation:
as i found that it is more often common that some case of duplicate certificate
and degree comes in front of me.
So it is necessary to create a secure and trust worthy system so that this type of
fraud cant take place.
For it the most necessary thing is to make badge data immutable and
verification of certificate or badge.

Idea :
let us assume that creation of badging platform and enable them to issue digital
badges are completed.
So now my work is to make badge data secure and immutable and transparent
and verification is possible of data provided by earner with the data that is
stored and immutable so that data is trustworthy.

Solution :
so the two important aspect to focus on to solve this problem are:-1-user verification(authenticated user).
2-badge verification(by using data stored at blockchain).
First is why user verification by doing this it will reduce a chance of not having
a authenticated user. Let me clear it to you by an example as we know ethereum
blockchain is a permissionless blockchain so anyone can se the transaction that
take place on it but cant change them so , let a malicious user is sitting on
ethereum blockcahin platform and decode the data in transaction and if know th
e time on which transaction that contain the data of digital badge take place on
blockchain he can get the information of all the thing that we use on verification
and let if his/her name is same as the badge owner whose badge data he/she get.
So if he/she verified it on verification platform and get verified he/she got an
verified badge even when he/she is not the real owner.
So when a user add his badge id for verification we have to sure that the user is
real and the request he/she for verification is for his/her own badge.
Solution for part one :
if we use verification process something like Oauth so that we have a
authenticated user and it also a user at badger website not just a malicious user
case – 1:
if user is not verified user then his/her badge information that he or she claimed
to have will be denied.
Case-2:

/*** Below is the link to the diagram ***/
https://drive.google.com/file/d/1n4Ciib-FlrnqEFoG7LgEPtZZP2FCKl4A/view?usp=sharing


if user is verified user then after verification it return an id to
website(globalshala) which is actually a user id or recipient id on the badger
website which is stored in database of badger website.
So now this user id is in between globalshala and badger website so no one else
have this.
Now we use it as a main part of verification process of badge.
Solution for part 2:
in this diagram it is clear that first a badge is created and its credentail id is also taken as data or
information to be store on blockchain int this diagram we have shown the way transaction has
take place in the next diagram we show how it will be store in a contract.
We use a smart contract as for query and storage.
Now when in return a transaction hash comes then it will be stored in smart contract with the
badge id or credential that is given to a badge when it is issued or created.
So now whenever a earner choose a badge that he/she want to get transaction hash then a
transaction hash is given to him/her.

/***Below is the link to the diagram ***/
https://drive.google.com/file/d/1sPKUoM4nh8Q5T6N_MwOAaa4R4Vp7Gefq/view?usp=sharing


VERIFICATION:
now we have discuss 2 case above that describe the first layer of verification process. Then as we
have verified that the person or earner is valid then his/her badge is verified .
He/she has to provide that transaction hash and some more other data.
Like email id, course name , date of earning of badge .
As when a user apply for verfication for checking if he is a valid user or not then a id is return to
the website than is a user special id.
Now when a user provide a transaction hash than data is extracted from it then that id that is
return back to the website during case 1 or case 2 is compared to the user id stored on data on
that transaction hash if it valid then other data is also matched is there is any mismatch then the
badge will not be verified and than that badge is not counted as valid one until it cant pass all
test of verification.


/***below is the link to the diagram***/


END:
This is the whole idea behind this approach.
Thanku for reading.
