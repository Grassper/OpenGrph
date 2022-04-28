// import { BillBoard } from '@/root/components/shared/BillBoard';
import { Header } from '@/root/components/shared/Header';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="mt-4 ml-2">
        <InputBox />
      </div>
    </div>
  );
};

const InputBox: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 px-10 py-14 w-[450px] font-secondary text-slate-900 dark:text-slate-50 rounded-3xl">
      <div className="block">
        <p className="font-bold text-[16px]">Url Fetch</p>
        <input
          className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg dark:placeholder:text-slate-500 placeholder:text-slate-300"
          maxLength={70}
          placeholder="https://www.blockscribers.com"
        />
      </div>
      <div className="block mt-6">
        <p className="font-bold text-[16px]">Title</p>
        <input
          className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg "
          maxLength={70}
        />
      </div>
      <div className="block mt-6">
        <p className="font-bold text-[16px]">Description</p>
        <textarea
          className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg"
          maxLength={160}
        />
      </div>
      <div className="flex">
        <div className="block mt-6 w-1/2">
          <p className="font-bold text-[16px]">Theme</p>
          <select className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg">
            <option>Dark</option>
          </select>
        </div>
        <div className="block mt-6 w-1/2 ml-4">
          <p className="font-bold text-[16px]">Color</p>
          <select className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg">
            <option>Dark</option>
          </select>
        </div>
      </div>
      <div className="flex">
        <div className="block mt-6 w-1/2">
          <p className="font-bold text-[16px]">Pattern</p>
          <select className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg">
            <option>Pastel</option>
          </select>
        </div>
        <div className="block mt-6 w-1/2 ml-4">
          <p className="font-bold text-[16px]">Resolution</p>
          <select className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg">
            <option>1200 x 630</option>
            <option>1200 x 627</option>
            <option>1500 x 500</option>
            <option>2560 x 1440</option>
            <option>1546 x 423</option>
            <option>1000 x 1500</option>
          </select>
        </div>
      </div>
      <button className="cursor-pointer rounded-full border border-red-500 py-4 px-2 w-full mt-10 hover:bg-red-500 hover:text-slate-50">
        Download
      </button>
    </div>
  );
};

export default Home;
