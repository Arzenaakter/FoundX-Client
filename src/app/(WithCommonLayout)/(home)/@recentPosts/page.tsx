import Card from "@/src/components/UI/Card";
import Container from "@/src/components/UI/Container";
import { getRecentPost } from "@/src/services/resentPost";
import { IPost } from "@/src/types";
import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";

const RecentPosts = async () => {
  const { data } = await getRecentPost();

  return (
    <Container>
      <div className="section-title ">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {data.map((item: IPost) => (
          <Card key={item._id} post={item} />
        ))}
      </div>
      <div className="flex justify-center mb-6">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPosts;
