export default function ExplainAES({
  phoneMode,
}: {
  phoneMode: boolean;
}): JSX.Element {
  return (
    <div>
      {phoneMode ? (
        <></>
      ) : (
        <p>
          This encrypt used by NSA and a big part of government america. It's
          currently the most secure at world ! It's AES 256 CBC.
        </p>
      )}
      <p>
        An IV (Initialization Vector) is a random and unique value stored to be
        able to decrypt the message.
      </p>
    </div>
  );
}
