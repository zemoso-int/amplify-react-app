/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function Atomssidemenunews(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Atomssidemenunews")}
    >
      <View
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "newspaper_black_24dp 1")}
      >
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Group842992")}
        >
          <Icon
            width="24px"
            height="24px"
            viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
            paths={[]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector842993")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "Group842994")}
        >
          <Icon
            width="20px"
            height="18px"
            viewBox={{ minX: 0, minY: 0, width: 20, height: 18 }}
            paths={[
              {
                d: "M20 0L18.33 1.67L16.67 0L15 1.67L13.33 0L11.67 1.67L10 0L8.33 1.67L6.67 0L5 1.67L3.33 0L1.67 1.67L0 0L0 16C0 17.1 0.9 18 2 18L18 18C19.1 18 20 17.1 20 16L20 0ZM9 16L2 16L2 10L9 10L9 16ZM18 16L11 16L11 14L18 14L18 16ZM18 12L11 12L11 10L18 10L18 12ZM18 8L2 8L2 5L18 5L18 8Z",
                fill: "rgba(148,161,150,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector842995")}
          ></Icon>
        </View>
      </View>
    </Flex>
  );
}
