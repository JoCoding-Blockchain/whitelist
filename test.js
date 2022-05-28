import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import whitelist from './whitelist.js';

try {
    const leafNodes = whitelist.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const rootHash = '0x' + merkleTree.getRoot().toString('hex');

    const addr = keccak256("");
    const hexProof = merkleTree.getHexProof(addr);

    console.log(`hexProof: ["${hexProof[0]}","${hexProof[1]}"]`);
    console.log("Verification: "+ merkleTree.verify(hexProof, addr, rootHash));
} catch (e) {
    console.log(e);
}
