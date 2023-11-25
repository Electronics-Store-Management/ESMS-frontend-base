"use client";

import viewProductList from "@/api/product/viewProductList.api";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";

export default function Page() {
	const searchParams = useSearchParams();
	const query = searchParams.get("q") || "";

	const res = useQuery<boolean[]>(["products", query], viewProductList, {});

	return <div></div>;
}