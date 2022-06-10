/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Atomslabel(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      borderRadius="4px"
      padding="4px 4px 4px 4px"
      backgroundImage="linear-gradient(-90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))"
      {...rest}
      {...getOverrideProps(overrides, "Atomslabel")}
    >
      <Text
        fontFamily="Montserrat"
        fontSize="12px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Hitech City"
        {...getOverrideProps(overrides, "Hitech City")}
      ></Text>
    </Flex>
  );
}
