"use client";
import { IconName } from "@/components/Icon";
import { Tag } from "@/components/Tag";
import { Skeleton } from "@/components/ui/skeleton";
import { GetProfileQuery } from "@/graphql/__generated__/graphql";
import { GET_PROFILE_QUERY } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import React from "react";

const UserInfoLabel = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: IconName;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-sans text-body-m-bold text-neutral-1">{label}</span>
      <div className="flex gap-4 items-center">
        <Tag icon={icon} style="solid" text={value} type="general" />
      </div>
    </div>
  );
};

const UserInfo = ({
  name,
  email,
  type,
  createdAt,
}: {
  name: string;
  email: string;
  type: string;
  createdAt: string;
}) => {
  return (
    <React.Fragment>
      <UserInfoLabel icon="user" label="Name" value={name} />
      <UserInfoLabel icon="project" label="Email" value={email} />
      <UserInfoLabel icon="user" label="Type" value={type} />
      <UserInfoLabel icon="calendar" label="Created At" value={createdAt} />
    </React.Fragment>
  );
};

export default function SettingsPage() {
  const { data, loading } = useQuery<GetProfileQuery>(GET_PROFILE_QUERY);

  if (loading) {
    return <Skeleton className="h-[400px] w-[300px] rounded-xl bg-neutral-3" />;
  }

  return (
    <div className="flex flex-col flex-1 gap-4 bg-neutral-4 p-8 py-8 rounded-lg w-[300px]">
      <UserInfo
        name={data?.profile.fullName ?? ""}
        email={data?.profile.email ?? ""}
        type={data?.profile.type ?? ""}
        createdAt={format(new Date(data?.profile.createdAt), "dd, MMM yyyy")}
      />
    </div>
  );
}
