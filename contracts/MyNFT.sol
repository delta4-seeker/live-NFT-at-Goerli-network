//SPDX-License-Identifier:MIT
pragma solidity >=0.5.0 < 0.9.0 ; 

import "@openzeppelin/contracts/token/ERC721/ERC721.sol" ; 
import "@openzeppelin/contracts/utils/Counters.sol" ; 
import "@openzeppelin/contracts/access/Ownable.sol" ; 
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol" ; 


contract MyNFT is ERC721URIStorage , Ownable {

    using Counters for Counters.Counter ; 

    Counters.Counter private tokenIds; 

    constructor() ERC721("Delta4" , "DLT4") {}
     function mintNFT(address _recipient , string memory _tokenURI) public onlyOwner returns(uint256){


        tokenIds.increment() ; 
        uint256 new_item_id = tokenIds.current() ; 

        _mint(_recipient , new_item_id) ; 
        _setTokenURI(new_item_id, _tokenURI);

        return new_item_id ; 


        }


}