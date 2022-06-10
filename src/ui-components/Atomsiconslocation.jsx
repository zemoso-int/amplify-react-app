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
import { Flex } from "@aws-amplify/ui-react";
export default function Atomsiconslocation(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "atoms/icons/location": {}, Atomsiconslocation: {} },
      variantValues: { property1: "icons", property2: "location" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="3px 3px 3px 3px"
      {...rest}
      {...getOverrideProps(overrides, "Atomsiconslocation")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="18px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "atoms/icons/location")}
      ></Flex>
    </Flex>
  );
}
