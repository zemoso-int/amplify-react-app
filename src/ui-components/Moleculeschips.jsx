/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import Atomsiconsclose from "./Atomsiconsclose";
export default function Moleculeschips(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "UI/UX Designer": {},
        "atoms/icons/close": {},
        Moleculeschips: {},
      },
      variantValues: { property1: "large" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="4px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="8px"
      padding="4px 12px 4px 12px"
      backgroundColor="rgba(232,255,252,1)"
      {...rest}
      {...getOverrideProps(overrides, "Moleculeschips")}
    >
      <Text
        fontFamily="Montserrat"
        fontSize="12px"
        fontWeight="500"
        color="rgba(101,110,102,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="UI/UX Designer"
        {...getOverrideProps(overrides, "UI/UX Designer")}
      ></Text>
      <Atomsiconsclose
        display="flex"
        gap="10px"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="24px"
        position="relative"
        padding="4px 4px 4px 4px"
        {...getOverrideProps(overrides, "atoms/icons/close")}
      ></Atomsiconsclose>
    </Flex>
  );
}
