
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';

export const EarnersView: FC = ({ }) => {

    let earners = [
      {
          'id': 1,
          'name': 'John Doe',
          'earned_amount_hnt': '75', // hnt
          'wallet': 'abc123'
      },
      {
          'id': 2,
          'name': 'Mark Joe',
          'earned_amount_hnt': '175', // hnt
          'wallet': 'xyz123'
      }
    ]
  
    return (
      <div className="md:hero mx-auto p-4 w-full">
        <div className="md:hero-content flex flex-col w-full">
          <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
            Earners
          </h1>
          <div className="w-full">
            <table className="text-left bg-[#1e1b4b] w-full">
                <thead>
                    <tr className="text-sm font-medium bg-[#000000]">
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Earned Amount (HNT)</th>
                        <th scope="col" className="px-6 py-3">Wallet</th>
                        <th scope="col" className="px-6 py-3">Send Payment</th>
                    </tr>
                </thead>
                <tbody>
                {earners.map((earner) => {
                    return (
                    <tr key={earner.id} className="odd:bg-[#1e1b4b] even:bg-[#0f0c47]">
                        <td className="px-6 py-3">{earner.name}</td>
                        <td className="px-6 py-3">HNT: {earner.earned_amount_hnt}, IOT: 0</td>
                        <td className="px-6 py-3">{earner.wallet}</td>
                        <td className="px-6 py-3"><SendTransaction></SendTransaction></td>
                    </tr>
                    )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
