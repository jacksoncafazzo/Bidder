using System.IO;
using Microsoft.AspNet.Builder;
using Nancy.Owin;
using Nancy;
using Nancy.ViewEngines.Razor;
using System.Collections.Generic;

namespace Bidder
{
  public class Startup
  {
    public void Configure(IApplicationBuilder app)
    {
      app.UseOwin(x => x.UseNancy());
    }
  }
  public class CustomRootPathProvider : IRootPathProvider
  {
    public string GetRootPath()
    {
      return Directory.GetCurrentDirectory();
    }
  }
  public class RazorConfig : IRazorConfiguration
  {
    public IEnumerable<string> GetAssemblyNames()
    {
      return null;
    }
    public IEnumerable<string> GetDefaultNamespaces()
    {
      return null;
    }
    public bool AutoIncludeModelNamespace
    {
      get {return false;}
    }
  }
}
