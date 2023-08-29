
import { FC } from "react";
/*
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';
*/

export const EarnersView: FC = ({ }) => {

  let earners = [
    {
        'id': 1,
        'name': 'John Doe',
        'earned_amount': '75', // hnt
        'wallet': 'abc123'
    },
    {
        'id': 2,
        'name': 'Mark Joe',
        'earned_amount': '175', // hnt
        'wallet': 'xyz123'
    }
  ]

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
          Earners
        </h1>
        <div className="text-center">
            {earners.map((earner) => {
    
                return (
                    <div key={earner.id}>
                        <div>{earner.name}</div>
                        <div>{earner.earned_amount}</div>
                        <div>{earner.wallet}</div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};
