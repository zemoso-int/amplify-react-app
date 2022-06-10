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
import { View } from "@aws-amplify/ui-react";
import Moleculessidemenu from "./Moleculessidemenu";
export default function Moleculessidemenuwbg(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Rectangle 7": { backgroundColor: "rgba(232,255,252,1)" },
        "Group 15": {},
        "molecules/sidemenu": {
          top: "calc(50% - 24px - 0px)",
          left: "14.81%",
          right: "33.7%",
          width: "139px",
        },
        "Rectangle 9": { backgroundColor: "rgba(27,135,122,1)" },
        Moleculessidemenuwbg: {},
      },
      variantValues: { state: "yes" },
    },
    {
      overrides: {
        "Rectangle 7": {},
        "Group 15": {},
        "molecules/sidemenu": {},
        "Rectangle 9": {},
        Moleculessidemenuwbg: {},
      },
      variantValues: { state: "no" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="270px"
      height="48px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Moleculessidemenuwbg")}
    >
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group 15")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 7")}
        ></View>
      </View>
      <Moleculessidemenu
        display="flex"
        gap="12px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="15.69%"
        right="29.77%"
        direction="row"
        width="147.24px"
        alignItems="center"
        padding="4px 4px 4px 4px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "molecules/sidemenu")}
      ></Moleculessidemenu>
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="98.89%"
        right="-0.37%"
        borderRadius="4px 0px 0px 4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 9")}
      ></View>
    </View>
  );
}
