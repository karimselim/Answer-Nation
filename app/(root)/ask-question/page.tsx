import Questions from "@/components/forms/Questions";
import { getUserById } from "@/lib/actions/user.action";
// import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  // const { userId } = auth();
  const userId = "abc123456";
  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  // console.log(mongoUser);

  console.log("this is the user", mongoUser);
  // console.log(mongoUser);
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div>
        <Questions mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default Page;
