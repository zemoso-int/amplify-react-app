/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function Atomssidemenutest(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Atomssidemenutest")}
    >
      <View
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "description_black_24dp 1")}
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
          {...getOverrideProps(overrides, "Vector842984")}
        ></Icon>
        <Icon
          width="16px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 16, height: 20 }}
          paths={[
            {
              d: "M4 14L12 14L12 16L4 16L4 14ZM4 10L12 10L12 12L4 12L4 10ZM10 0L2 0C0.9 0 0 0.9 0 2L0 18C0 19.1 0.89 20 1.99 20L14 20C15.1 20 16 19.1 16 18L16 6L10 0ZM14 18L2 18L2 2L9 2L9 7L14 7L14 18Z",
              fill: "rgba(148,161,150,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="8.33%"
          bottom="8.33%"
          left="16.67%"
          right="16.67%"
          {...getOverrideProps(overrides, "Vector842985")}
        ></Icon>
      </View>
    </Flex>
  );
}
