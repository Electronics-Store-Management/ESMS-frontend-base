export default function Layout(props: {
    children: React.ReactNode;
    supplier: React.ReactNode;
    bill: React.ReactNode;
}) {
    return (
        <div className="w-full h-full grid grid-cols-3 items-stretch gap-6">
            {props.supplier}
            {props.bill}
        </div>
    );
}
