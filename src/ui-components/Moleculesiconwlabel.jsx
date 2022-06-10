/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Moleculescheckbox from "./Moleculescheckbox";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Moleculesiconwlabel(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="row"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Moleculesiconwlabel")}
    >
      <Moleculescheckbox
        display="flex"
        gap="12px"
        direction="row"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="16px"
        position="relative"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        property1="checkbox"
        property2="no"
        {...getOverrideProps(overrides, "molecules/checkbox")}
      ></Moleculescheckbox>
      <Text
        fontFamily="Montserrat"
        fontSize="14px"
        fontWeight="500"
        color="rgba(101,110,102,1)"
        lineHeight="22px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="0 - 10 Kms"
        {...getOverrideProps(overrides, "0 - 10 Kms")}
      ></Text>
    </Flex>
  );
}
