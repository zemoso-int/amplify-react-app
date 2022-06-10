/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function Atomsiconscurrent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="4px 4px 4px 4px"
      {...rest}
      {...getOverrideProps(overrides, "Atomsiconscurrent")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="16px"
        height="16px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 52")}
      >
        <Icon
          width="16px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
          paths={[
            {
              d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z",
              fill: "rgba(48,161,147,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Ellipse 5")}
        ></Icon>
        <Icon
          width="8px"
          height="8px"
          viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
          paths={[
            {
              d: "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="4px"
          left="4px"
          {...getOverrideProps(overrides, "Ellipse 6")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
