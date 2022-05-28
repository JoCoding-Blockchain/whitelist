import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import whitelist from './whitelist.js';

try {
    const rootHash = ""
    const address = ""

    const leafNodes = whitelist.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

    const addr = keccak256(address);
    const hexProof = merkleTree.getHexProof(addr);

    console.log(`hexProof: ["${hexProof[0]}","${hexProof[1]}"]`);
    console.log("Verification: "+ merkleTree.verify(hexProof, addr, rootHash));
} catch (e) {
    console.log(e);
}