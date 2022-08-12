import Layout from "../components/layout";
import { getPosts } from "../lib/posts";

export default function Home() {
  return (
    <Layout>
      <p>RAEN, born a build tool...</p>
      <div className="responsiveVideoWrap">
        <iframe src="https://www.youtube.com/embed/m5dOyaKp18Y" title="Introducing RAEN: YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <p>...will grow into a framework:</p>
      <div className="responsiveVideoWrap">
        <iframe src="https://www.youtube.com/embed/i3W2kgRLqew" title="RAEN Status & Vision: YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <hr/>

      <p>Quick links:</p>
      <ul>
        <li><a href="https://raen.dev/admin">RAEN Admin</a></li>
        <li><a href="https://github.com/raendev/raen">Just start building</a></li>
        <li>Learn Rust + NEAR, <a href="https://raen.dev/guide">the friendly way</a></li>
      </ul>

      <hr/>

      <p>Without RAEN, there’s no easy way for smart contract authors or the people building apps on top of their contracts to know what methods a smart contract has, or what arguments they take. Ethereum solves this with <a href="https://docs.soliditylang.org/en/develop/abi-spec.html" rel="nofollow">ABIs</a>, JSON files that contract authors need to distribute off-chain to app-builders or documentation-maintainers who want to integrate with or describe the contract. <a href="https://near.org/blog/announcing-the-launch-of-pagoda-the-worlds-first-web3-startup-platform/" rel="nofollow">Pagoda fka Near Inc</a> is working on <a href="https://github.com/near/near-sdk-rs/blob/41eb838b0d745394d7530aabe363f80dfc649a0c/near-sdk/src/private">a clone of Ethereum’s approach</a>.</p>
      <p>RAEN leap-frogs this approach. It uses a <a href="https://github.com/bytecodealliance/wit-bindgen">Wasm-compatible standard</a> that is more compact than JSON, can be auto-translated to Pagoda’s ABI or other formats like <a href="https://open-rpc.org/" rel="nofollow">OpenRPC</a>, and will one day merge with Wasm core. And RAEN injects Wit directly into the smart contract while reducing overall contract size. No more searching GitHub for ABI files. Now they can all live right on-chain.</p>
      <p>In a RAEN-maximized version of NEAR, anyone will be able to easily generate cross-contract call logic, TypeScript libraries, CLIs, <a href="https://raen.dev/admin/" rel="nofollow">Admin UIs / interactive documentation</a>, <a href="https://thegraph.com/" rel="nofollow">Subgraphs</a> and more, just using a contract name.</p>
      <p>The best part? Getting started couldn’t be easier. It’s one command. Just build your contracts with <code>raen build</code>.</p>
      <p><strong>Rust-only</strong>, for now. New to Rust or NEAR? Check out <strong><a href="https://raen.dev/guide" rel="nofollow">The RAEN Guide</a></strong>.</p>
      <h3>About the name</h3>
      <p>“RAEN” is “NEAR” spelled backwards. It is pronounced the same as “rain”.</p>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  return { props: { posts } };
}
