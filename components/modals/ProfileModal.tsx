"use client";

import React from "react";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useProfileModal from "../../app/hooks/useProfileModal";
import { useMemo, useState } from "react";

const ProfileModal = () => {
  const router = useRouter();
  const profileModal = useProfileModal();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);

    axios
      .post("/api/listings", data)
      .then(() => {
        toast.success("Profile Updated");
        router.refresh();
        profileModal.onClose();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  let bodyContent = <div>Hi</div>;

  return (
    <Modal
      disabled={isLoading}
      isOpen={profileModal.isOpen}
      title="Edit Profile"
      actionLabel="Save Profile"
      onClose={profileModal.onClose}
      onSubmit={() => {
        onSubmit;
      }}
      body={bodyContent}
    />
  );
};

export default ProfileModal;
