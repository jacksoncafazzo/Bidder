using System;
using System.Collections.Generic;

namespace Bids.Objects
{
  // class BidList : List<Bid>
  // {
  //
  // }
  {
    public class BidDetails
    {
      private string _bidTitle { get; set; }
      private double _bidAmount { get; set; }
      private double _bidJobStart { get; set; }
      private double _bidJobEnd { get; set; }
      private string _bidLocation { get; set; }
      private string _bidderName { get; set; }
      private static List<Bid> _list = new List<Bid>(){};

      public Bid(string bidTitle, string bidAmount, bidJobStart, bidJobEnd, bidLocation, bidderName)
      {
        _bidTitle = bidTitle;
        _bidAmount = bidAmount;
        _bidJobStart = bidJobStart;
        _bidJobEnd = bidJobEnd;
        _bidLocation = bidLocation;
        _bidderName = bidderName;
      }

      public string GetBidTitle()
      {
        return _bidTitle;
      }
      public double GetBidAmount()
      {
        return _bidAmount;
      }
      public double GetJobStart()
      {
        return _bidJobStart;
      }
      public double GetJobEnd()
      {
        return _bidJobEnd;
      }
      public string GetBidLocation()
      {
        return _bidLocation;
      }
      public string GetBidderName()
      {
        return _bidLocation;
      }
      public void SaveBid()
      {
        _list.Add(this);
      }
      public static List<BidDetails> GetAllBids()
      {
        return _list;
      }
    }

    public class Bid
    {
      private string _
    }
  }
}
