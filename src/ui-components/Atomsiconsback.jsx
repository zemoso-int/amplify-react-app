/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function Atomsiconsback(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="3px 3px 3px 3px"
      {...rest}
      {...getOverrideProps(overrides, "Atomsiconsback")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="18px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "atoms/icons/back")}
      ></Flex>
    </Flex>
  );
}
