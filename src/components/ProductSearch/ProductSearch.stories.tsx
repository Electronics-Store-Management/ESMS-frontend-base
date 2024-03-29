import type { Meta, StoryObj } from "@storybook/react";

import ProductSearch from "./ProductSearchUI";
import withQuery from "../../utils/withQuery";
import SEARCH_PARAMS from "../../constants/searchParams";

const meta = {
    title: "Components/ProductSearch",
    component: ProductSearch,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        isCategoryLoading: { control: "boolean" },
        isProductLoading: { control: "boolean" },
    },
} satisfies Meta<typeof ProductSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        categories: [
            { id: "123", name: "CPU" },
            { id: "223", name: "RAM" },
        ],
    },
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: withQuery("/product", {
                    [SEARCH_PARAMS.productName]: "Name",
                }),
            },
        },
    },
};
