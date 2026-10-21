// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";
contract Election is AccessControl, Pausable {
 bytes32 public constant ELECTION_ADMIN_ROLE = keccak256("ELECTION_ADMIN_ROLE");
 enum Status { DRAFT, LIVE, CLOSED, RESULTS_PUBLISHED }
 struct Candidate { uint256 id; string name; }
 Status public status; mapping(uint256=>Candidate) public candidates; mapping(address=>bool) public authorized; mapping(address=>bool) public hasVoted; mapping(uint256=>uint256) public voteCounts; uint256 public candidateCount;
 event CandidateAdded(uint256 indexed id,string name); event VoterAuthorized(bytes32 indexed commitment); event VoteRecorded(bytes32 indexed ballotCommitment, uint256 indexed candidateId); event ElectionStarted(); event ElectionClosed(); event ResultsPublished();
 constructor(address admin){_grantRole(DEFAULT_ADMIN_ROLE,admin);_grantRole(ELECTION_ADMIN_ROLE,admin);}
 function addCandidate(string calldata name) external onlyRole(ELECTION_ADMIN_ROLE){candidateCount++;candidates[candidateCount]=Candidate(candidateCount,name);emit CandidateAdded(candidateCount,name);}
 function authorize(bytes32 commitment) external onlyRole(ELECTION_ADMIN_ROLE){emit VoterAuthorized(commitment);}
 function start() external onlyRole(ELECTION_ADMIN_ROLE){status=Status.LIVE;emit ElectionStarted();}
 function castVote(bytes32 ballotCommitment,uint256 candidateId) external whenNotPaused {require(status==Status.LIVE,"Election not live");require(!hasVoted[msg.sender],"Already voted");require(candidateId>0&&candidateId<=candidateCount,"Invalid candidate");hasVoted[msg.sender]=true;voteCounts[candidateId]++;emit VoteRecorded(ballotCommitment,candidateId);}
 function close() external onlyRole(ELECTION_ADMIN_ROLE){status=Status.CLOSED;emit ElectionClosed();}
 function publishResults() external onlyRole(ELECTION_ADMIN_ROLE){status=Status.RESULTS_PUBLISHED;emit ResultsPublished();}
 function pause() external onlyRole(ELECTION_ADMIN_ROLE){_pause();} function unpause() external onlyRole(ELECTION_ADMIN_ROLE){_unpause();}
}
