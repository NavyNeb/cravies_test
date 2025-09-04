
type Props = { checked: boolean }

const Radio = ({ checked }: Props) => (
    <span
      className={
        "mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full border border-black/20 bg-white " +
        (checked ? "ring-2 ring-black after:block after:h-2.5 after:w-2.5 after:rounded-full after:bg-green-app" : "")
      }
    />
  );
export default Radio