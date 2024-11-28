import { Separator } from "@/components/ui/separator"

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center mt-20 mb-40 leading-normal">
            <div className="text-[130px] font-bold">
                404
            </div>
            <Separator className="w-[260px]" />
            <div className="text-[20px] font-semibold mt-10">
                Where did you get this link?
            </div>
        </div>
        // <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        //     <div style={{ margin: "200px 0" }}>
        //         <div style={{ fontWeight: "700", fontSize: "130px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        //             404
        //         </div>
        //         <hr style={{
        //             color: "#bcbcbc", height: "1px", marginTop: "0", border: "none", backgroundColor: "var(--gray)",
        //         }} />
        //         <div style={{ fontSize: "22px" }}>
        //             Where did you get this link?
        //         </div>
        //     </div>
        // </div >
    );
}