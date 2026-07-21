"use client";

import { ChangeEvent } from "react";

type Props = {

    file: File | null;

    onChange: (file: File | null) => void;

};

export default function Preview({

    file,

    onChange,

}: Props) {

    function handleFile(e: ChangeEvent<HTMLInputElement>) {

        const selected = e.target.files?.[0];

        if (selected) {

            onChange(selected);

        }

    }

    return (

        <div className="border-2 border-dashed rounded-xl p-10 text-center">

            <input

                type="file"

                accept="image/*"

                onChange={handleFile}

            />

            {file && (

                <p className="mt-4 text-sm">

                    {file.name}

                </p>

            )}

        </div>

    );

}