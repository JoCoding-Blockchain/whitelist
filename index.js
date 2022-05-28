import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import whitelist from './whitelist.js';
import fs from 'fs';

try {
    const leafNodes = whitelist.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const rootHash = '0x' + merkleTree.getRoot().toString('hex');
    
    let result = "whitelist wallet list: [\n";
    whitelist.map(addr => result+=`${addr},\n`);
    result += "]\n\n";
    result += `rootHash: ${rootHash}`;
    fs.writeFile("./result/result.txt", result, (e)=>(e));
    console.log('Whitelist Hash Generated!');
} catch (e) {
    console.log(e);
}
