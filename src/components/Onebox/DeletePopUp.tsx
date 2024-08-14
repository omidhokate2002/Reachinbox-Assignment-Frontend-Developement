interface DeletePopUpProps {
  onCancel: () => void;
  onDelete: () => void;
}

const DeletePopUp: React.FC<DeletePopUpProps> = ({ onCancel, onDelete }) => (
  <div className='fixed inset-0 flex items-center justify-center bg-[#8484847D] bg-opacity-50 z-50'>
    <div className='bg-gradient-to-b from-[#141517] to-[#232528] p-8 rounded-lg flex flex-col items-center'>
      <h2 className='text-3xl font-bold mb-4'>Are you sure?</h2>
      <p className='text-sm my-8 px-12 text-center'>
        Are you sure you want to delete this mail?
      </p>
      <div className='flex gap-4'>
        <button
          onClick={onCancel}
          className='bg-[#25262B] text-white px-8 py-3 rounded-md focus:outline-none hover:bg-[#1e1e1e]'
        >
          Cancel
        </button>
        <button
          onClick={onDelete}
          className='bg-gradient-to-r from-[#FA5252] to-[#A91919] text-white px-8 py-3 rounded-md focus:outline-none hover:from-[#d74343] hover:to-[#a01414]'
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default DeletePopUp;
