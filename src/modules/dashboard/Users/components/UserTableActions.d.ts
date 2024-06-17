import React from "react";
import "./index.scss";
declare const UserTableAction: ({ id, closeModal, }: {
    id: string;
    closeModal: () => void;
}) => React.JSX.Element;
export default UserTableAction;
