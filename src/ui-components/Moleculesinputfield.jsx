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
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Moleculesinputfield(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Rectangle 4": {},
        "Enter your Location": {},
        "Group 8": {},
        "Group 9": {},
        Moleculesinputfield: {},
      },
      variantValues: { property1: "input", property2: "empty" },
    },
    {
      overrides: {
        "Rectangle 4": {},
        "Enter your Location": { color: "rgba(55,60,56,1)" },
        "Group 8": {},
        "Group 9": {},
        Moleculesinputfield: {},
      },
      variantValues: { property1: "input", property2: "filled" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Moleculesinputfield")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="400px"
        height="48px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 9")}
      >
        <View
          width="400px"
          height="48px"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(233,235,233,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 4")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="120px"
          height="16px"
          position="absolute"
          top="16px"
          left="16px"
          {...getOverrideProps(overrides, "Group 8")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="12px"
            fontWeight="500"
            color="rgba(148,161,150,1)"
            lineHeight="16px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Enter your Location"
            {...getOverrideProps(overrides, "Enter your Location")}
          ></Text>
        </View>
      </Flex>
    </Flex>
  );
}
