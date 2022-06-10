/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function Atomssidemenucontact(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Atomssidemenucontact")}
    >
      <View
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "call_black_24dp 1")}
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
          {...getOverrideProps(overrides, "Vector843012")}
        ></Icon>
        <Icon
          width="18px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          paths={[
            {
              d: "M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2L3.54 2L3.54 2ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47L16 15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02L13.4 14.02ZM4.5 0L1 0C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17L18 13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0Z",
              fill: "rgba(148,161,150,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "Vector843013")}
        ></Icon>
      </View>
    </Flex>
  );
}
