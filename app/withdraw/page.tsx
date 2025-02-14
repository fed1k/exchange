"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";

const coins = [
    {
        name: "BTC",
        img: "https://s1.bycsi.com/app/assets/token/d9c8c35b4223b50d9773d7d5294d019f.svg"
    },
    {
        name: "USDT",
        img: "https://s1.bycsi.com/app/assets/token/d1b50144f0fd108b77820baac86bde23.svg"
    },
    {
        name: "BNB",
        img: "https://s1.bycsi.com/app/assets/token/a5f5acef9e4ee381767205006404a5e6.svg"
    },
    {
        name: "TRX",
        img: "https://s1.bycsi.com/app/assets/token/0a8ab9d4c096600186e3fb463ddfe939.svg"
    },
    {
        name: "XRP",
        img: "https://s1.bycsi.com/app/assets/token/989f5749b8cca6f45f01e3ddb8ae58be.svg"
    }
];

const WithdrawPage = () => {
    const [activeToken, setActiveToken] = useState("");
    const [activeSet, setActiveSet] = useState("");
    const [openDropdownToken, setOpenDropdownToken] = useState(false);
    const [openSet, setOpenSet] = useState(false);
    const [acknowledge, setAcknowledge] = useState(false);
    const [copied, setCopied] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");

    useEffect(() => {
        let timeout = setTimeout(() => {
            setCopied(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [copied]);

    const handleWithdraw = () => {
        // Handle withdrawal logic here (this is just a placeholder for now)
    };

    return (
        <div className="container mx-auto px-4 py-12 md:py-24 sm:p-10 sm:flex sm:flex-col sm:items-center">
            <p className={`${!copied ? "-top-6" : "top-28"} left-[43%] fixed z-20 bg-black border px-2 py-1 rounded transition-all`}>Copied ✔</p>
            <h2 className="text-2xl pb-3">Withdraw</h2>

            <div className="p-5 gap-4 rounded-lg sm:mx-auto sm:inline-block custom-shadow border-[#4ade80] border border-opacity-20">
                <div className="flex gap-4">
                    <div>
                        <div className="bg-[#4ade80] rounded-full text-center p-1 px-3">1</div>
                        <div className="border-l-2 translate-x-4 border-dashed h-20 my-4"></div>
                    </div>
                    <div className="relative">
                        <p className="text-lg pb-2">Choose token</p>
                        <Input
                            value={activeToken}
                            onFocus={() => setOpenDropdownToken(true)}
                            onBlur={() => setOpenDropdownToken(false)}
                            placeholder="Select crypto"
                        />
                        <div className={`${openDropdownToken ? "opacity-100 z-10 -translate-y-0" : "opacity-0 -z-20 -translate-y-4"} -z-20 absolute w-full bg-[hsl(240_10%_3.9%)] border rounded mt-2 border-green-600 transition-all`}>
                            {coins.map((coin, index) => (
                                <div key={index} onClick={() => setActiveToken(coin.name)} className="flex gap-2 items-center p-2 rounded cursor-pointer hover:bg-green-900">
                                    <Image width={24} height={24} src={coin.img} alt="coin logo" />
                                    <p>{coin.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div>
                        <div className="bg-[#4ade80] rounded-full text-center p-1 px-3">2</div>
                        <div className="border-l-2 translate-x-4 border-dashed h-20 my-4"></div>
                    </div>
                    <div>
                        <p className="text-lg pb-2">Chain</p>
                        <Input
                            value={activeSet}
                            onFocus={() => setOpenSet(true)}
                            onBlur={() => setOpenSet(false)}
                            placeholder="Select chain"
                        />
                        <div className={`${openSet ? "opacity-100 -translate-y-0" : "opacity-0 -translate-y-4"} border rounded mt-2 border-green-600 transition-all`}>
                            <p onClick={() => setActiveSet("TRC20")} className="p-2 rounded cursor-pointer hover:bg-green-900">TRC20</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div>
                        <div className="bg-[#4ade80] rounded-full text-center p-1 px-3">3</div>
                    </div>
                    <div>
                        <p className="text-lg pb-2">Wallet Address</p>
                        {activeToken && activeSet && !acknowledge ? (
                            <div className="flex flex-col bg-neutral-900 p-4 rounded">
                                <p className="max-w-64 text-sm">Confirm deposit of {activeToken} to this TRC20 address. Incorrect info may lead to asset loss.</p>
                                <Button onClick={() => setAcknowledge(true)} className="mt-2 mx-auto">Confirm</Button>
                            </div>
                        ) : null}
                        {acknowledge && (
                            <>
                            <div>
                                <Input
                                    value={walletAddress}
                                    onChange={(e) => setWalletAddress(e.target.value)}
                                    placeholder="Enter your wallet address"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-6 text-center">
                            <Button
                                onClick={handleWithdraw}
                                disabled={!activeToken || !activeSet || !acknowledge || !walletAddress}
                                className="w-full sm:w-auto mx-auto"
                            >
                                Withdraw
                            </Button>
                        </div>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithdrawPage;
