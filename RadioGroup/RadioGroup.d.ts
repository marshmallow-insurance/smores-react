import React, { FocusEvent, ReactElement } from 'react';
import { Icons } from 'Icon/iconsList';
import { CommonFieldProps } from '../fields/commonFieldTypes';
import { BaseValueType, DisplayType, IconPosition } from './types';
export type RadioGroupProps<Value extends BaseValueType = BaseValueType> = {
    options: Array<{
        visual?: string;
        icon?: Icons;
        iconPosition?: IconPosition;
        label: string;
        value: Value;
        bodyCopy?: string;
    }>;
    onChange: (value: Value) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    value: Value;
    displayType?: DisplayType;
    fallbackStyle?: boolean;
} & CommonFieldProps;
export type RadioGroupElement = {
    focus: VoidFunction;
};
export declare const RadioGroup: <Value extends BaseValueType = BaseValueType>(p: {
    options: {
        visual?: string | undefined;
        icon?: "link" | "filter" | "key" | "id" | "property" | "security" | "aa-inverted" | "accidental-damage" | "account-breakdown" | "account-mlp" | "activity-clipboard" | "add-ons" | "address-mta" | "album-audio" | "alert-engine" | "apple-pay" | "approved-file" | "breakdown-alt" | "cancel-bw" | "car-mta" | "car-repairs" | "car-replacement" | "car-usage" | "chat-bubble" | "checkout-with-text" | "circle-tick" | "claim-line" | "clipboard-check" | "close-panel" | "confused-blue" | "contact-email" | "dashboard-high" | "direct-debit" | "doc-download" | "doc-upload" | "edit-contact" | "edit-outline" | "email-filled" | "falling-items" | "file-badge-2" | "file-cabinet" | "fraud-alert" | "freezer-food" | "google-play-badge" | "help-aboutus" | "help-buypolicy" | "help-center" | "help-idcheck" | "help-manage-policy" | "help-ncd" | "help-verification" | "home-excluded" | "house-tree" | "ios-store-badge" | "live-chat" | "live-chat2" | "log-out" | "manage-drivers" | "manage-policy" | "maximise-window" | "minus-circle" | "money-bag" | "money-heart" | "more-dots" | "new-window" | "no-excess" | "open-panel" | "out-of-home" | "padlock-outline" | "phone-filled" | "phone-outline" | "pin-code" | "plus-circle" | "policy-details" | "policy-doc" | "policy-docs" | "pound-bold" | "pound-filled-circle" | "pound-medium" | "pound-outline" | "pound-regular" | "question-help" | "refer-a-friend" | "reg-plate" | "renewal-line" | "repeat-charge" | "schedule-quote" | "send-message" | "shield-check" | "thumbs-up" | "tow-truck" | "trace-and-access" | "up-down" | "upload-documents" | "upload-email" | "wheel-flat" | "windscreen-repair" | "windscreen-replacement" | "aa" | "addons" | "alert" | "amex" | "arrow" | "at" | "axa" | "bank" | "basket" | "bicycle" | "boost" | "breakdown" | "briefcase" | "burger" | "calendar" | "camera" | "cancel" | "car" | "card" | "caret" | "charge" | "chat" | "checkout" | "city" | "claim" | "clipboard" | "clock" | "collpase" | "confused" | "copy" | "crop" | "cross" | "download" | "earth" | "edit" | "engine" | "europe" | "excluded" | "expand" | "facebook" | "fence" | "file" | "fire" | "flag" | "folder" | "fuel" | "globe" | "gpay" | "house" | "inbox" | "included" | "info" | "injury" | "instagram" | "intercom" | "intercom2" | "iphone" | "jewellery" | "laptop" | "leaks" | "lightbulb" | "linkedin" | "location" | "marshmallow" | "mastercard" | "maximise" | "medical" | "minimise" | "minus" | "mulsanne" | "notes" | "notification" | "onfido" | "other" | "padlock" | "people" | "person" | "photo" | "plus" | "policy" | "premfina" | "profile" | "prohibited" | "rac" | "ravelin" | "refund" | "renewal" | "return" | "search" | "settings" | "shield" | "shopping" | "sofa" | "stack" | "storm" | "stripe" | "subsidence" | "theft" | "tick" | "training" | "trash" | "twitter" | "upload" | "vandalism" | "village" | "visa" | "warning" | "watch" | "wave" | "wellbeing" | "windscreen" | undefined;
        iconPosition?: IconPosition | undefined;
        label: string;
        value: Value;
        bodyCopy?: string | undefined;
    }[];
    onChange: (value: Value) => void;
    onBlur?: ((e: FocusEvent<HTMLInputElement>) => void) | undefined;
    value: Value;
    displayType?: DisplayType | undefined;
    fallbackStyle?: boolean | undefined;
} & CommonFieldProps & React.RefAttributes<HTMLInputElement>) => ReactElement | null;
