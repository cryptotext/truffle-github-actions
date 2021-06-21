pragma solidity ^0.8.0;

contract HelloWorld {
    string public message = "Hello, World!";

    function changeMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
