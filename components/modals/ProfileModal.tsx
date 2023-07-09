"use client";

import React from "react";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useProfileModal from "../../app/hooks/useProfileModal";
import { useMemo, useState } from "react";
import ImageUpload from "../inputs/ImageUpload";
import Heading from "../Heading";

const ProfileModal = () => {
  const router = useRouter();
  const profileModal = useProfileModal();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);

    axios
      .post("/api/profile", data)
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

  let bodyContent = (
    <div className="flex flex-col p-6">
      <div>
        <Heading title="Update your name" />
      </div>
      <div>
        <Heading title="Change your password" />
      </div>
      <div className="flex flex-col gap-3">
        <Heading title="Update your profile picture" />
        <ImageUpload onChange={() => {}} value=""></ImageUpload>
      </div>
    </div>
  );

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
