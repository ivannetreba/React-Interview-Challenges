import React from "react";

// Task: What's wrong with this code?

export function UserProfile({ user }) {
  // return (
  //   <div>
  //     <h1>{user.name}</h1>
  //     <p>City: {user.address.city}</p>
  //     </div>
  //   <div>
  //     <h2>Posts</h2>
  //     {user.posts.map((post, index) => (
  //       <div key={index}>
  //         <h3>{post.title}</h3>
  //       </div>
  //     ))}
  //   </div>
  // );
};




// Answer

// Mistake 1: Multiple JSX elements in return statement without a fragment:

// The original code returns two <div> elements at the root level, which results in a syntax error because JSX requires a single parent element. Wrapping these elements in a React fragment (<> </>) solves this issue.

// Mistake 2: Lack of optional chaining:

// The original code accesses properties of user directly, which can lead to runtime errors if user or its nested properties (address and posts) are undefined. Using optional chaining (?.) ensures that the code handles undefined values gracefully.

// Fixed code:
/*
export function UserProfile({ user }) {
  return (
    <>
      <div>
        <h1>{user?.name}</h1>
        <p>City: {user?.address?.city}</p>
      </div>
      <div>
        <h2>Posts</h2>
        {user?.posts?.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
*/
